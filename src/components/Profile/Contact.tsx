import React from 'react';
import s from "./Profile.module.css";

type ContactType = {
    contactTitle: string
    contactValue: string | null
}

const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div className={s.contactsBlock}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    );
};

export default Contact;