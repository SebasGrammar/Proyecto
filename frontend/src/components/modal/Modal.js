import "./Modal.css"

export default function Modal({ pageTitle, title, labels, tipo, buttonAdd,show }) {


  /*  let cerrar = document.querySelectorAll(".close")[0];
    let abrir = document.querySelectorAll(".cta")[0];
    let modal = document.querySelectorAll(".o-modal-container")[0];
    let modalC = document.querySelectorAll(".o-global-container")[0];

         abrir.addEventListener("click",function(e){

                e.preventDefault();
                modalC.style.opacity ="1";
                modalC.style.visibility="visible";
                modal.classList.toggle("modal-close");

            });

            cerrar.addEventListener("click",function(e){

                e.preventDefault();
                modal.classList.toggle("modal-close")
                modalC.style.opacity ="1";
                modalC.style.visibility="hidden";
                

            });*/

            if(!show){
                return null;
            }

    return (
        <section className="o-global-container d-flex align-items-center justify-content-center p-5">
            <section className="o-modal-container rounded w-50 mw-51 p-2 modal-close">

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