import "./Modal.css"

export default function Table({ pageTitle, title, labels,tipo,buttonAdd}) {



    return (
        <section className="o-global-container d-flex justify-content-center p-5">
            <section className="o-modal-container rounded w-50 mw-51 p-2">

                <section className="up-modal-container">
                    <p className="p-0">{pageTitle}</p>
                    <h1 className="p-0 mb-2">{title}</h1>
                </section>

                <section className="center-modal-container">

                    <section className="o-labels">
                        {
                            labels.map(label => {
                                return (
                                    <div className="d-flex justify-content-around">
                                     <div>  
                                    <p className="p-0">{label}</p>
                                    </div>
                                    <div classname="p-0">  
                                    <input className="entryText" type={tipo} id="username" name="username " placeholder="" />
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                    
                </section>

                <section className="bottom-modal-container d-flex justify-content-around ">

                    <button className="botonSecundarioo">Cancelar</button>
                    <button className="botonPrincipall">{buttonAdd}</button>

                </section>

            </section>


        </section>

    )
}