import React from 'react';

const App = () => {
    return (
        <div>
            <nav className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <img src="./img/logo.svg" alt="Logo"/>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className={"hover:text-darkGrayishBlue"}>Pricing</a>
                        <a href="#" className={"hover:text-darkGrayishBlue"}>Product</a>
                        <a href="#" className={"hover:text-darkGrayishBlue"}>About Us</a>
                        <a href="#" className={"hover:text-darkGrayishBlue"}>Careers</a>
                        <a href="#" className={"hover:text-darkGrayishBlue"}>Community</a>
                    </div>
                    <a href="#"
                       className="hidden md:block  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get
                        Started</a>
                </div>
            </nav>

            <section id="hero">
                <div
                    className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                    <div className={"flex flex-col mb-32 space-y-12 md:w-1/2"}>
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Bring everyone together to build better products
                        </h1>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                            teams goals in view
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a href="#"
                               className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get
                                Started</a>
                        </div>
                    </div>

                    <div className={"md:w-1/2"}>
                        <img src="./img/illustration-intro.svg" alt="illustration-intro"/>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <div className={"flex flex-col space-y-12 md:w-1/2"}>
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            What's different about Manage?
                        </h2>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage provides all the functionality your team needs, without the
                            complexity. Our software is tailor-made for modern digital product
                            teams
                        </p>
                    </div>

                    <div className={"flex flex-col space-y-8 md:w-1/2"}>
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        01
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track company-wide progress
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden md-4 text-lg font-bold md:block">
                                    Track company-wide progress
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from
                                    tracking progress at the milestone level all the way down to the
                                    smallest of details. Never lose sight of the bigger picture
                                    again
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        02
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Advanced built-in reports
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden md-4 text-lg font-bold md:block">
                                    Advanced built-in reports
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Set internal delivery estimates and track progress toward
                                    company goals. Our customisable dashboard helps you build out
                                    the reports you need to keep key stakeholders informed
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        03
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Everything you need in one place
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden md-4 text-lg font-bold md:block">
                                    Everything you need in one place
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Stop jumping from one service to another to communicate, store
                                    files, track tasks and share documents. Manage offers an
                                    all-in-one team productivity solution
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About Manage?
                    </h2>
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                            <img src="./img/avatar-anisha.png" className={"w-16 -mt-14"} alt="Anisha"/>
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                “Manage has supercharged our team’s workflow. The ability to
                                maintain visibility on larger milestones at all times keeps
                                everyone motivated.”
                            </p>
                        </div>

                        <div
                            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src="./img/avatar-ali.png" className={"w-16 -mt-14"} alt="Anisha"/>
                            <h5 className="text-lg font-bold">Ali Bravo</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                “We have been able to cancel so many other subscriptions since
                                using Manage. There is no more cross-channel confusion and
                                everyone is much more focused.”
                            </p>
                        </div>

                        <div
                            className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src="./img/avatar-richard.png" className={"w-16 -mt-14"} alt="Anisha"/>
                            <h5 className="text-lg font-bold">Richard Watts</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                “Manage has supercharged our team’s workflow. The ability to
                                maintain visibility on larger milestones at all times keeps
                                everyone motivated.”
                            </p>
                        </div>
                    </div>

                    <div className="my-16">
                        <a href="#"
                           className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get
                            Started</a>
                    </div>
                </div>
            </section>

            <section id="cta" className={"bg-brightRed"}>
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                    <div>
                        <a href="#"
                           className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-300">Get
                            Started</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;