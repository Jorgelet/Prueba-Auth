import { defineStore } from "pinia";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword, signOut } from 'firebase/auth'


export const useAuth = defineStore('auth', () => {
    let token = ref(null)
    const auth = getAuth()
    
    const createUser = async () => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            const user = userCredential.user;
            token.value = user.uid
            console.log('Nuevo usuario creado:', token.value);


        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error)
        }
    }

    const outUser = async () => {
        try {
            await signOut(auth);
            token.value = null
            console.log('Usuario ha cerrado sesión exitosamente.');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    }

    const signUser = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
            const user = userCredential.user;
            token.value = user.uid
            console.log('Usuario iniciado correctamente:', token.value);

        } catch (error) {
            console.error('Error al iniciar sesion:', error)
        }
    }

    return { token, createUser, outUser, signUser }
},{
    persist: true   
})


// export const useAuth = defineStore('auth', {
//     state: ()=>{
//         return{
//             token: ref(null),
//             auth: getAuth()
//         }
//     },
//     actions: {
//         async createUser(email, password) {
//             try {
//                 const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
//                 const user = userCredential.user;
//                 this.token.value = user.uid;
//                 console.log('Nuevo usuario creado:', this.token.value);
//             } catch (error) {
//                 console.error('Error al crear un nuevo usuario:', error);
//             }
//         },
//         async outUser() {
//             try {
//                 await signOut(this.auth);
//                 this.token.value = null;
//                 console.log('Usuario ha cerrado sesión exitosamente.');
//             } catch (error) {
//                 console.error('Error al cerrar sesión:', error);
//             }
//         },
//         async signUser(email, password) {
//             try {
//                 const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
//                 const user = userCredential.user;
//                 this.token.value = user.uid;
//                 console.log('Usuario iniciado correctamente:', this.token.value);
//             } catch (error) {
//                 console.error('Error al iniciar sesión:', error);
//             }
//         }
//     }
// });
    
