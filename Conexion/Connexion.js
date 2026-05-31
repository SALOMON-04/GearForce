const btnUtilisateur = document.querySelector('.utilisateur')
const btnFournisseur = document.querySelector('.fournisseur')

const formUtilisateur = document.querySelector('.form_utilisateur')
const formFournisseur = document.querySelector('.form_fournisseur')

const gaucheUtilisateur = document.querySelector('.gauche_utilisateur')
const gaucheFournisseur = document.querySelector('.gauche_fournisseur')

const section = document.querySelector('.Compte')

// AU CHARGEMENT
formFournisseur.style.display = 'none'
gaucheFournisseur.style.display = 'none'

// CLIC UTILISATEUR
btnUtilisateur.addEventListener('click', function(e) {
    e.preventDefault()

    formUtilisateur.style.display = 'flex'
    formFournisseur.style.display = 'none'
    gaucheUtilisateur.style.display = 'flex'
    gaucheFournisseur.style.display = 'none'
    section.style.backgroundImage = "url('../../Image/image11.png')"

    btnUtilisateur.style.backgroundColor = '#2a1500'
    btnUtilisateur.querySelector('h3').style.color = '#ec9100'
    btnUtilisateur.querySelector('i').style.color = '#ec9100'
    btnFournisseur.style.backgroundColor = '#2a2a2a'
    btnFournisseur.querySelector('h3').style.color = 'white'
    btnFournisseur.querySelector('i').style.color = 'white'
})

// CLIC FOURNISSEUR
btnFournisseur.addEventListener('click', function(e) {
    e.preventDefault()

    formFournisseur.style.display = 'flex'
    formUtilisateur.style.display = 'none'
    gaucheFournisseur.style.display = 'flex'
    gaucheUtilisateur.style.display = 'none'
    section.style.backgroundImage = "url('../../Image/image12.png')"

    btnFournisseur.style.backgroundColor = '#2a1500'
    btnFournisseur.querySelector('h3').style.color = '#ec9100'
    btnFournisseur.querySelector('i').style.color = '#ec9100'
    btnUtilisateur.style.backgroundColor = '#2a2a2a'
    btnUtilisateur.querySelector('h3').style.color = 'white'
    btnUtilisateur.querySelector('i').style.color = 'white'
})







