<template>

 <nav>
        <div class="container">
            <a href="index.html" class="logo">Little Learners</a>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#equipe">Équipe</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <slot />
    <footer>
        <div class="container">
            <p>&copy; 2024 Little Learners. Tous droits réservés.</p>
            <ul>
                <li><a href="#">Confidentialité</a></li>
                <li><a href="#">Conditions</a></li>
                <li><a href="#">Accessibilité</a></li>
            </ul>
        </div>
    </footer>

    </template>