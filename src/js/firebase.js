import { firebaseConfig, firebase_app } from './firebase_config.js';
import { initializeApp } from "firebase/app";
import { onSnapshot, getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, query, where, getDocs, limit, orderBy } from "firebase/firestore";
import { create_logger } from './logger.js';
import { cloud_mex } from './snacks_store.js';

const log = create_logger("firebase.js");

// Initialize Firebase
log.info("Initialize Firestore connection");
const db = getFirestore();


export async function listen_messages() {
    console.log("INIT LISTENING TO MESSAGES");
    const q = query(collection(db, "messages"), orderBy("id", "desc"), limit(1));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            cloud_mex.set(doc.data());
        });
    });
}

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
    const q = query(collection(db, "snacks"), where("email", "==", email), orderBy("millis_order", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
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

export async function get_order_by_user_date(email, order_date) {
    console.log(email);
    console.log(order_date);
    const q = query(collection(db, "snacks"), 
                    where("email", "==", email),
                    where("date_order", "==", order_date));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.size > 0)
        return querySnapshot.docs[0].data();
    else
        return null;
}


export async function get_orders_by_date(order_date) {
    let qtys = {};

    const q = query(collection(db, "snacks"), 
                    where("date_order", "==", order_date));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        doc.data().food_list.forEach((food) => {
            if(food.id in qtys)
                qtys[food.id].count += food.count;
            else
                qtys[food.id] = food;
        })
    });
    
    return Object.values(qtys);
}

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