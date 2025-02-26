import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"

// No uses .tsx en la importación

const BlogCarousel = () => {
    return (
        <Carousel className="w-full max-w-6xl" plugins={[
            Autoplay({ delay: 2000, stopOnHover: true, })
        ]}

            opts={{
                align: "start",
                loop: true,


            }}>
            <CarouselContent className="m-0">
                <CarouselItem className="basis-1/2">
                    <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random" />
                </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    );
};

export default BlogCarousel;
