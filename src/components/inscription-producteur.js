import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Formulaire() {
  const [name, setName] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [tva, setTva] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // fonction pour mettre à jour l'état du nom avec
  // valeur saisie par l'utilisateur dans le formulaire
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // fonction pour mettre a jour la raison social du producteur
  // valeur saisie par l'utilisateur dans le formulaire
  const handleNameCompanyChange = (e) => {
    setNameCompany(e.target.value);
  };
  // fonction pour mettre à jour le numéro de TVA du producteur
  // entrer par l'utilisateur dans le formulaire
  const handleTvaChange = (e) => {
    setTva(e.target.value);
  };
  // fonction pour mettre à jour l'addresse
  // entrer par l'utilisateur dans le formulaire
  const handleAdresseChange = (e) => {
    setAdresse(e.target.value);
  };
  //fonction pour mettre a jour le numéro de téléphone
  // entrer par l'utilisateur dans le formulaire
  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  }

  // fonction pour mettre à jour l'état de l'e-mail avec la valeur
  // entrer par l'utilisateur dans le formulaire
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // fonction pour mettre à jour l'état du mot de passe avec
  // valeur saisie par l'utilisateur dans le formulaire
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // fonction pour mettre à jour l'état de confirmation du mot de passe
  // avec valeur saisie par l'utilisateur dans le formulaire
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // la fonction ci-dessous sera appelée lorsque l'utilisateur
  // cliquez sur le bouton Soumettre.
  const handleSubmit = (e) => {
    if (password != confPassword) {
      // si 'mot de passe' et 'confirmer le mot de passe'
      // ne correspond pas.
      alert('le mot de passe ne correspond pas');
    } else {
      // afficher la boîte d'alerte avec l'utilisateur
      // 'nom' et 'email' détails.
      alert(
        'Un formulaire a été soumis avec Nom:"' +
          name +
          '" ,Age :"' +
          tva +
          '" et Email :"' +
          email +
          '"'
      );
    }
    e.preventDefault();
  };
  return (
    <div className="formulaire">
      <header className="formulaire-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/*lorsque l'utilisateur soumet le formulaire, handleSubmit()
        la fonction sera appelée .*/}
          <h2>formulaire Producteur </h2>
          <h3> Sign-up Form </h3>
          <img src="" />
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie du nom, handleChange()
              fonction sera appelée. */}
          <label>Raison social:</label>
          <br />
          <input
            type="text"
            value={nameCompany}
            required
            onChange={(e) => {
              handleNameCompanyChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie du nom, handleChange()
              fonction sera appelée. */}
          <label>N° de TVA:</label>
          <br />
          <input
            type="text"
            maxlength="11"
            pattern="[0-9]{11}"
            value={tva}
            required
            onChange={(e) => {
              handleTvaChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie du numéro de tva, handleTvaChange()
               la fonction sera appelée. */}
          <label>adresse:</label>
          <br />
          <input
            type="text"
            value={adresse}
            required
            onChange={(e) => {
              handleAdresseChange(e);
            }}
          />
          <br />
          <label>Numéro de téléphone:</label>
          <br />
          <input
            type="text"
            maxlength="10"
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            value={numero}
            required
            onChange={(e) => {
              handleNumeroChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie de l'adresse, handleAdresseChange()
               la fonction sera appelée. */}
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie de l'e-mail, handleEmailChange()
              fonction sera appelée. */}
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie du mot de passe,
                  La fonction handlePasswordChange() sera appelée. */}
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          {/*lorsque l'utilisateur écrit dans la zone de saisie du mot de passe de confirmation,
                    La fonction handleConfPasswordChange() sera appelée. */}
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Formulaire;
