import { ref } from "vue";

const user = ref({nom: 'Quentin', email: 'email@email.com'});

function fakeConnection(){
    console.log('hey sigining in');
}

function deconnexion() {
    console.log('...');
}

export function useUserStore(){
    return {
        user,
        deconnexion,
        fakeConnection
    }
}