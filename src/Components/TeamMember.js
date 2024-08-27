
import React from 'react';
import './TeamMember.scss';
import { HiPlusCircle } from "react-icons/hi2";

const TeamMember = ({ image, name, title, description }) => {
    return (
        <>
            <div className='container-team-member'>
                <div className="team-member">
                    <img src={image} alt={name} className="team-member__image" />
                    <div className="team-member__description">
                        <p>{description}</p>

                        <h4>READ MORE</h4>
                    </div>
                </div>
                <div className='team-member-box'>

                    <div className='team-member-title-name'>
                        <h3 className="team-member__name">{name}</h3>
                        <p className="team-member__title">{title}</p>
                    </div>

                    <div className='team-member-icon'>
                        <HiPlusCircle className='team-member-icone' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default TeamMember;
