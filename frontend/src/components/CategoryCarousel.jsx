import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Game Development"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="w-full px-4 my-10">
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent className="flex gap-4">
                    {
                        category.map((cat, index) => (
                            <CarouselItem 
                                key={index} 
                                className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
                            >
                                <Button 
                                    onClick={() => searchJobHandler(cat)} 
                                    variant="outline" 
                                    className="rounded-full w-full max-w-xs text-xs sm:text-sm"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="flex justify-between mt-4">
                    <CarouselPrevious className="bg-gray-200 rounded-full p-2" />
                    <CarouselNext className="bg-gray-200 rounded-full p-2" />
                </div>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;
