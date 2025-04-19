import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { WOW } from 'wowjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.scss';
// Import testimonial images
import testimonial1 from '../../assets/img/garantie1.png';
import testimonial2 from '../../assets/img/garantie1.png';
import testimonial3 from '../../assets/img/garantie1.png';

const testimonials = [
    {
        id: 1,
        name: "Marie Laurent",
        position: "Propriétaire",
        image: testimonial1,
        content: "Une équipe exceptionnelle qui a su transformer notre jardin en un véritable paradis. Le professionnalisme et l'attention aux détails sont remarquables. Je recommande vivement leurs services !"
    },
    {
        id: 2,
        name: "Pierre Dubois",
        position: "Directeur Commercial",
        image: testimonial2,
        content: "La création de notre piscine a été un véritable succès. L'équipe a su respecter nos attentes tout en apportant des suggestions pertinentes. Un grand professionnalisme et un travail de qualité."
    },
    {
        id: 3,
        name: "Sophie Martin",
        position: "Architecte",
        image: testimonial3,
        content: "En tant qu'architecte, je suis particulièrement attentive aux détails. Le travail réalisé est d'une qualité exceptionnelle. L'harmonie entre les différents éléments est parfaite."
    }
];

const TestimonialCard = ({ testimonial }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="testimonial-card wow fadeInUp">
            <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-overlay"></div>
            </div>
            <div className="testimonial-content">
                <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                </div>
                <p>{testimonial.content}</p>
                <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

function TestimonialsSection() {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="testimonials-page">
            <Container>
                <div className="section-title wow fadeInUp" data-wow-delay="0.001s">
                    <h2>Ce que disent nos clients</h2>
                    <p>Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leurs projets d'aménagement extérieur.</p>
                </div>

                {/* Slider Section */}
                <div className="testimonial-slider wow fadeInUp" data-wow-delay="0.002s">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
}

export default TestimonialsSection; 