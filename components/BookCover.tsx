import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "small" | "default" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
    small: 'book-cover_small',
    default: 'book-cover_regular',
    wide: 'book-cover_wide',
}

interface Props {
    className?: string;
    variant?: BookCoverVariant
    coverColor: string;
    coverImage: string;
}

const BookCover = ({
    className,
    variant = 'default',
    coverColor = '#012B48',
    coverImage = "https://placehold.co/400X600.png" }
    : Props) => {
    return (
        <div className={cn(
            'relative transition-all duration-300',
            variantStyles[variant],
            className,)}>

            <BookCoverSvg
                coverColor={coverColor}
            />

            <div
                className="absolute z-10"
                style={{ left: '12%', width: "87.5%", height: '88%' }}>
                <Image src={coverImage} alt="Book cover" fill className="rounded-sm object-fit" />

            </div>

        </div>
    )
}

export default BookCover
