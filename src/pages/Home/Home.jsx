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
import { useStudentsStore } from "pages/Students/store/useStudentsStore";
import { useCountriesStore } from "pages/Countries/store/useCountriesStore.js";
import { useState, useEffect } from "react";
import { Container, CustomCard, Typography } from "ui/index";
import { useTranslation } from "react-i18next";
import { UseSize } from "utils/helpers/useSize.jsx";
import { Loader } from "pages/Loader/Loader.jsx";

export const Home = () => {
    const { t } = useTranslation();
    const { students } = useStudentsStore(0, 6);
    const { countries } = useCountriesStore(0, 6);
    const [open, setOpen] = useState(false);
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true); // Управление состоянием загрузки
    const { tablet, phone, miniTab, laptop } = UseSize();

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

    useEffect(() => {
        if (students && countries) {
            setLoading(false);
        }
    }, [students, countries]);

    if (loading) return <Loader />;

    return (
        <>
            <Hero />
            <Container>
                <AboutUs />
                {countries?.length > 0 ? (
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
                ) : null}
                <div id={"services"}>
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

            <ReviewsBlock />
            <Container>
                <FAQBlock />
                <Contacts />
            </Container>

            <ModalComponent open={open} closeModal={closeModal} student={student} />
        </>
    );
};
