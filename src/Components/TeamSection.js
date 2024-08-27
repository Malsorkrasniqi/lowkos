
import React from 'react';
import TeamMember from './TeamMember';
import './TeamSection.scss';

const teamData = [
    {
        image: require('../Images/Labinot Halimi Leqi.png'),
        name: 'Labinot Halimi',
        title: 'Managing Partner',
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',
    },
    {
        image: require('../Images/Arbenita Jashari.png'),
        name: 'Arbenita Jashari',
        title: 'Attorney at law, Partner',
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',

    },
    {
        image: require('../Images/Festina Murati.png'),
        name: 'Festina Murati',
        title: 'Attorney at law',
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',

    },
];

const TeamSection = () => {
    return (
        <section className="team-section">
            <h2 className='team-section-h2'>Meet our team</h2>
            <p className='team-section-p '>
                Meet the brilliant minds behind LawKos. Our team of skilled lawyers and
                legal experts make LawKos your best choice for legal representation.
            </p>
            <div className="team-section__members">
                {teamData.map((member, index) => (
                    <TeamMember
                        key={index}
                        image={member.image}
                        name={member.name}
                        title={member.title}
                        description={member.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
