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
import {useState} from "react";
import {Container, CustomCard, Typography} from "ui/index";
import {useCountriesStore} from "pages/Countries/store/useCountriesStore.js";
import {useMediaQuery} from "utils/helpers/useMedia.js";

export const Home = () => {
    const limit = 6;

    const {students} = useStudentsStore(0, limit);

    const [open, setOpen] = useState(false);
    const [student, setStudent] = useState({});
    const {countries, count} = useCountriesStore(0, limit);
    const tablet = useMediaQuery("(max-width: 900px)")
    const phone = useMediaQuery("(max-width: 500px)")
    const miniTab = useMediaQuery("(max-width: 750px)")
    const laptop = useMediaQuery("(max-width: 1200px)")

    let maxCards = 2.2;
    if (laptop) {
        maxCards = 1.7;
    }
    if (tablet) {
        maxCards = 1.39;
    }
    if (phone) {
        maxCards = 2
    }
    let cards = 3.2
    if (laptop) cards = 2.5
    if (tablet) cards = 2.1
    if (miniTab) cards = 1.7
    if (phone) cards = 1.2
    const openModal = (student) => {
        setOpen(true);
        setStudent(student);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Hero/>
            <Container>
                <AboutUs/>
                <Typography variant="heading">страны</Typography>
            </Container>
            <Container slide>
                <Slider
                    maxCards={maxCards}
                    sliderList={countries}
                    renderSlide={(item) => (
                        <CustomCard
                            variant="country"
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            link={`/countries/${item.id}`}
                        />
                    )}
                />
            </Container>
            <div  id={"services"}>
                <Container>
                    <Services/>
                    <Typography variant="heading">поступившие студенты</Typography>
                </Container>
            </div>
            <Container slide>
                <Slider
                    maxCards={cards}
                    sliderList={students}
                    renderSlide={(item) => (
                        <CustomCard
                            variant="students"
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            modal={() => openModal(item)}
                        />
                    )}
                />
            </Container>
            <ReviewsBlock />
            <Container>
                <FAQBlock />
                <Contacts />
            </Container>

            <ModalComponent open={open} closeModal={closeModal} student={student}/>
        </>
    );
};
