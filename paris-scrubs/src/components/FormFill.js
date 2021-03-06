import React from "react";
import "./FormFill.css"

class FormFilm extends React.Component {

state = {
    username: '',
    img: '',
    age: '',
    gender: '...un homme, une femme ? ',
    physic: '',
    mental: '',
    food:'',
    }
    

    //Création de la méthode "onChange"
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    //Création de la méthode de soumission du formulaire
    submitForm = e => {
        e.preventDefault();

            //Création de la configuration appelée par le "fetch"
            const config = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            };
    
            //Création de l'url appelant la base de données "films" ???
            const url = "https://discaz.github.io/API-profiles/api/all.json";

        
            //Création du "fetch" pour envoyer les données via le formulaire
            fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Profil ajouté avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout de votre profil');
            });
    }
    
    render() {
        return (
            <div className="FormProfil">
                <h1>Créer votre profil</h1>

                <h2>Et lâchez-vous ou on va vous jeter !!!</h2>

                <form onSubmit={this.submitForm}>

                <fieldset>
                    <legend className="legend">Allez ! On nous donne gentiment son identité...</legend>
                    
                    {/* SURNOM */}
                    <div className="form-data">
                    <label htmlFor="username">Votre surnom</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    </div>

                    {/* GENRE */}
                    <div className="form-data">
                    <label htmlFor="gender">Et vous êtes ?</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        onChange={this.onChange}
                        value={this.state.gender}
                    />
                    </div>

                    {/* PHOTO */}
                    <div className="form-data">
                    <label htmlFor="img">Votre photo</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={this.onChange}
                        value={this.state.img}
                    />
                    </div>

                    {/* AGE */}
                    <div className="form-data">
                    <label htmlFor="age">Votre âge</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        onChange={this.onChange}
                        value={this.state.age}
                    />
                    </div>
                </fieldset>

                <section className="height"></section>

                <fieldset>

                    <legend className="legend">Décrivez-nous vos défauts dont vous êtes le plus fier</legend>

                    {/* DEFAUT PHYSIQUE */}
                    <div className="form-data">
                    <label htmlFor="physic">Vos défauts physiques</label>
                    <input
                        type="text"
                        id="physic"
                        name="physic"
                        onChange={this.onChange}
                        value={this.state.physic}
                    />
                    </div>

                    {/* DEFAUT MENTAL */}
                    <div className="form-data">
                    <label htmlFor="mental">Vos défauts psychologiques</label>
                    <input
                        type="text"
                        id="mental"
                        name="mental"
                        onChange={this.onChange}
                        value={this.state.mental}
                    />
                    </div>

                </fieldset>

                <section className="height"></section>

                <fieldset>

                    <legend className="legend">Et autre chose encore ?</legend>

                    {/* FOOD */}
                    <div className="form-data">
                    <label htmlFor="food">Vos goûts culinaires</label>
                    <input
                        type="text"
                        id="food"
                        name="food"
                        onChange={this.onChange}
                        value={this.state.food}
                    />
                    </div>

                    <section className="height"></section>
                    <hr />


                    <div className="form-data">
                    <input type="submit" value="Valider votre profil" />
                    </div>
                </fieldset>
                </form>
                </div>
        );
    }

}

export default FormFilm;