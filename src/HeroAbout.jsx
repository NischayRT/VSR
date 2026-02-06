const HeroAbout = () => {
    return (
        <section className="container py-8 flex flex-wrap justify-center text-center">
            <div className="grid-rows-3 flex md:grid-rows-6 justify-around">
            <div >
                <h3 className="text-3xl home-stat">3000+</h3>
                <p>Clients Served</p>
            </div>
            <div>
                <h3 className="text-3xl home-stat">84000+</h3>
                <p>Trophies Delivered</p>
            </div>
            </div>
            <div className="grid-rows-3 flex md:grid-rows-6 justify-around">
            <div>
                <h3 className="text-3xl home-stat">70+</h3>
                <p>Ailments Cured</p>
            </div>
            <div>
                <h3 className="text-3xl home-stat">200+</h3>
                <p>Global Clientele</p>
            </div>
            </div>
        </section>
        );
    };

export default HeroAbout;