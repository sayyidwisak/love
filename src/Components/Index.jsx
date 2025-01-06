import Button from "./Button"
import Camera from "../assets/img/camera.png";
import Clock from "../assets/img/clock.png"
// import Gift from "../assets/img/gift.png"
import Letter from "../assets/img/letter.png"

const Index = () => {
    const pages = [
        {
            href: '/journey',
            name: 'Journeys',
            image: Camera,
            alt: 'Camera',
        },
        {
            href: '/moment',
            name: 'Moments',
            image: Clock,
            alt: 'Clock',
        },
        // {
        //     href: '/gift',
        //     name: 'Gift',
        //     image: Gift,
        //     alt: 'Gift',
        // },
        {
            href: '/message',
            name: 'Messages',
            image: Letter,
            alt: 'Message',
        },
    ]
    return (
        <>
            {pages.map((item, index) => (
                <Button
                    key={index}
                    href={item.href}
                    name={item.name}
                    image={item.image}
                    alt={item.alt}
                />
            ))}
        </>
    )

}



export default Index