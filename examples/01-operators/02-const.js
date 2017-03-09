// disponible a partir de ES2015
const MY_CONST = 123;

// lance une erreur, ne peut modifier une constante
MY_CONST = 20; 

// lance une erreur, ne peut redéclarer une constante existante
const MY_CONST = 1; 

// le scope modifie la visiblité
if(MY_CONST === 123) {
    // possible car dans un block scope
    const MY_CONST = 20;

    console.log(MY_CONST);
}

// toujours 123
console.log(my_CONST);

// lance une erreur une constante doit être déclarée avec une valeur
const FOO;

// peut être un objet ou tout autre structure JS
const MY_OBJ = { "key": "value" };

// la constante est shallow, empêche seulement le changement de pointeur, même chose pour array
MY_OBJ.key = "foobar";