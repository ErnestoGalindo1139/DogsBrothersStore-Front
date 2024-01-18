export const Mapa = () => {
    return (
        <iframe
            className="w-full h-80 lg:h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117308.67194715665!2d-106.50160663363769!3d23.24687134560693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5341681837c1%3A0x62a4c4aaf13c72b2!2zTWF6YXRsw6FuLCBTaW4u!5e0!3m2!1ses-419!2smx!4v1703976279173!5m2!1ses-419!2smx"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    )
}
