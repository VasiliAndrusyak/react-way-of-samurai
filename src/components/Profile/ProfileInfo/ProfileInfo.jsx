import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;