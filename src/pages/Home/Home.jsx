import {
    AboutUs,
    Hero,
    FAQBlock,
    Services,
    Slider,
    Contacts,
    ReviewsBlock,
    ModalComponent,
} from "modules/index";
import {useStudentsStore} from "pages/Students/store/useStudentsStore";
import {useCountriesStore} from "pages/Countries/store/useCountriesStore.js";
import {useEffect, useRef, useState} from "react";
import {Container, CustomCard, Typography} from "ui/index";
import {useTranslation} from "react-i18next";
import {UseSize} from "utils/helpers/useSize.jsx";

export const Home = () => {
    const {t} = useTranslation();
    const {students} = useStudentsStore(0, 6);
    const {countries} = useCountriesStore(0, 6);
    const [open, setOpen] = useState(false);
    const [student, setStudent] = useState({});
    const {tablet, phone, miniTab, laptop} = UseSize();
    const serviceRef=useRef(null);
    let maxCards = 2;
    if (laptop) {
        maxCards = 1.7;
    }
    if (tablet) {
        maxCards = 1.33;
    }
    if (phone) {
        maxCards = 2;
    }
    let cards = 3;
    if (laptop) cards = 2.5;
    if (tablet) cards = 2;
    if (miniTab) cards = 1.8;
    if (phone) cards = 1.2;

    const openModal = (student) => {
        setOpen(true);
        setStudent(student);
    };

    const closeModal = () => {
        setOpen(false);
    };
    const scrollToElement = () => {
        if (serviceRef.current) {
            const offset = 50;
            const elementPosition =
                serviceRef.current.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = elementPosition - offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (location.pathname === "/services") {
            scrollToElement()
        } else {
            scrollToTop();
        }
    }, [location.pathname]);

    return (
        <>
            <Hero/>
            <Container>
                <AboutUs/>
                    <>
                        <Typography variant="heading">{t("titles.countries")}</Typography>
                        <Slider
                            minCardWidth={292}
                            maxCards={maxCards}
                            sliderList={countries}
                            renderSlide={(item) => (
                                <CustomCard
                                    variant="country"
                                    title={item.title}
                                    image={item.image}
                                    isMain
                                    description={item.description}
                                    link={`/countries/${item.id}`}
                                />
                            )}
                        />
                    </>

                <div id={"services"} ref={serviceRef}>
                    <Services />
                </div>


                {students?.length > 0 ? (
                    <>
                    <Typography variant="heading">{t("titles.adStudents")}</Typography>
                        <Slider
                            maxCards={cards}
                            sliderList={students}
                            renderSlide={(item) => (
                                <CustomCard
                                    variant="students"
                                    title={item.title}
                                    image={item.image}
                                    isMain
                                    description={item.description}
                                    modal={() => openModal(item)}
                                />
                            )}
                        />
                    </>
                ) : null}
            </Container>

            <ReviewsBlock/>
            <Container>
                <FAQBlock/>
                <Contacts/>
            </Container>

            <ModalComponent open={open} closeModal={closeModal} student={student}/>
        </>
    );
};
