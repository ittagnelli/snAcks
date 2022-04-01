import { firebaseConfig, firebase_app } from './firebase_config.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, query, where, getDocs, limit, orderBy } from "firebase/firestore";
import { create_logger } from './logger.js';



const log = create_logger("firebase.js");

// Initialize Firebase
log.info("Initialize Firestore connection");
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

export async function get_orders_by_email(email) {
    let orders = [];
    const q = query(collection(db, "snacks"), where("email", "==", email), orderBy("date_order", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        orders.push({
            id: doc.id,
            order: doc.data()
        })
    });
    return orders;
}

export async function get_orders_by_user_date(email, order_date) {
    const q = query(collection(db, "snacks"), 
                    where("email", "==", email),
                    where("date_order", "==", order_date));
    const querySnapshot = await getDocs(q);

    return querySnapshot.size;
}

export async function get_orders_by_date(order_date) {
    let num_salato = 0;
    let num_dolce = 0;

    const q = query(collection(db, "snacks"), 
                    where("date_order", "==", order_date));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        num_salato += doc.data().qty_salato;
        num_dolce += doc.data().qty_dolce;
    });

    return {
            "num_dolce": num_dolce,
            "num_salato": num_salato
        };
}

// export async function search_by_token(token, field) {
//     const q = query(collection(db, "directory"), where(field, ">=", token), where(field, "<", token + 'z'));
//     const querySnapshot = await getDocs(q);
//     return querySnapshot;
// }



//legeg una collezione e restituisce solo i documenti che fanno match con filterArray
// export async function read_coll(coll, filterArray) {
//     let q1 = new query();
//     q1.where("colore", "==", "giallo");
    
//     const querySnapshot = await getDocs(q1);
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//     });

// }


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