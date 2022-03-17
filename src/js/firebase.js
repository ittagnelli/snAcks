
import { firebaseConfig, firebase_app } from './firebase_config.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import { create_logger } from './logger.js';



const log = create_logger("firebase.js");

// Initialize Firebase
log.info("Initialize Firestore connection");
// const app = initializeApp(firebaseConfig);
const db = getFirestore();



//legge un documento appartenente ad una specifica collezione
export async function read_doc(coll, docname) {
    try {
        let res = undefined;
        const document = await getDoc(doc(db, coll, docname));
        
        if (document.exists())
            res = document.data();
        
            return res;
    } catch(e) {
        log.error(e);
    }
}

export async function search_by_token(token, field) {
    const q = query(collection(db, "directory"), where(field, ">=", token), where(field, "<", token + 'z'));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
}



//legeg una collezione e restituisce solo i documenti che fanno match con filterArray
export async function read_coll(coll, filterArray) {
    console.log("XXXXXx");
    
    // let xquery;

    // xquery = filterArray.reduce((accQuery, filter) => {
    //                   return accQuery.where(filter.field, filter.op, filter.value);
    //                 }, xquery);

    // const q = query(collection(db, coll), xquery);


    // const q = query(collection(db, coll), where("colore", "==", "giallo"));

    // const q = query(collection(db, coll), where("colore", "==", "giallo"), where("nome", "==", "antonio4"));
    // const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });

    let q1 = new query();

    q1.where("colore", "==", "giallo");
    // const q2 = query(q1, where("nome", "==", "antonio4"));

    const querySnapshot = await getDocs(q1);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });

}


//legeg una collezione e restituisce solo i documenti che fanno match con filterArray
// export async function read_coll(collection, filterArray) {
//     let documents =[];

//     try {
//           let query = db.collection(collection);
//           query = filterArray.reduce((accQuery, filter) => {
//               return accQuery.where(filter.field, filter.op, filter.value);
//             }, query);

//           await query
//           .get()
//           .then(docs => {
//               docs.forEach(doc => {
//                   documents = [...documents, doc.data()];
//                 });
//             });
//     }
//     catch(e) {
//         log.error(e);
//     }
//     return documents;
// }

//scrive un documento con uno specifico nome in una specifica collezione
export async function write_doc(record, coll, docname) {
	let docuname = docname || Date.now().toString(36) + Math.random().toString(36).substring(2);
	try {
        await setDoc(doc(db, coll, docuname), record);
    } catch(e) {
        log.error(e);
    }
}

//aggiorna un documento con uno specifico nome in una specifica collezione
export async function update_doc(coll, docname, record) {
    try {

        const doc_reference = doc(db, coll, docname);
        await updateDoc(doc_reference, record);
    } catch(e) {
        log.error(e);
    }
}

//cancella uno specifico documento appartenente ad una specifica collezione
export async function delete_doc(coll, docname) {
    try {
        await deleteDoc(doc(db, coll, docname));
    } catch(e) {
        log.error(e);
    }
}