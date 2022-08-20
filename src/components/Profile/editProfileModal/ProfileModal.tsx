import React from 'react';
import s from './ProfileModal.module.css';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {ProfileType, saveProfile} from "../../../redux/profile-reducer";

type ProfileModalType = {
    setEditMode: (edit: boolean) => void
    profile: ProfileType
}

const ProfileModal = ({profile, setEditMode}: ProfileModalType) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            github: profile.contacts.github,
            vk: profile.contacts.vk,
            facebook: profile.contacts.facebook,
            instagram: profile.contacts.instagram,
            twitter: profile.contacts.twitter,
            website: profile.contacts.website,
            youtube: profile.contacts.youtube,
            mainLink: profile.contacts.mainLink,
        },
        onSubmit: (values) => {
            console.log(values.lookingForAJob)
            const profileData = {
                fullName: values.fullName,
                aboutMe: values.aboutMe,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                contacts: {
                    github: values.github,
                    vk: values.vk,
                    facebook: values.facebook,
                    instagram: values.instagram,
                    twitter: values.twitter,
                    website: values.website,
                    youtube: values.youtube,
                    mainLink: values.mainLink
                }
            }
            dispatch(saveProfile(profileData))
            setEditMode(false);

        },
    });

    const getBack = () => {
        setEditMode(false);
    }

    return (
        <div className={s.darkBG}>
            <div className={s.centered}>
                <div className={s.modal}>
                    <div className={s.modalHeader}>
                        <h1 className={s.heading}>Edit profile</h1>
                    </div>
                    <div className={s.modalContent}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="fullName">Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="aboutMe">About me</label>
                                <input
                                    id="aboutMe"
                                    name="aboutMe"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.aboutMe}
                                />
                            </div>
                            <div className={s.inputBlock} style={{marginTop: '5px', marginBottom: '5px'}}>
                                <label className={s.label} htmlFor="lookingForAJob">Looking for a job?</label>
                                <input
                                    id="lookingForAJob"
                                    name="lookingForAJob"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    value={'lookingForAJob'}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="lookingForAJobDescription">Your skills</label>
                                <input
                                    id="lookingForAJobDescription"
                                    name="lookingForAJobDescription"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.lookingForAJobDescription}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="github">GitHub</label>
                                <input
                                    id="github"
                                    name="github"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.github}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="vk">VK</label>
                                <input
                                    id="vk"
                                    name="vk"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.vk}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="facebook">Facebook</label>
                                <input
                                    id="facebook"
                                    name="facebook"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.facebook}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="instagram">Instagram</label>
                                <input
                                    id="instagram"
                                    name="instagram"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.instagram}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="twitter">Twitter</label>
                                <input
                                    id="twitter"
                                    name="twitter"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.twitter}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.website}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="youtube">YouTube</label>
                                <input
                                    id="youtube"
                                    name="youtube"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.youtube}
                                />
                            </div>
                            <div className={s.inputBlock}>
                                <label className={s.label} htmlFor="mainLink">Main Link</label>
                                <input
                                    id="mainLink"
                                    name="mainLink"
                                    type="text"
                                    className={s.input}
                                    onChange={formik.handleChange}
                                    value={formik.values.mainLink}
                                />
                            </div>
                            <div className={s.buttons}>
                                <button className={s.submitBtn} type="submit">Submit</button>
                                <button className={s.backBtn} onClick={getBack}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;