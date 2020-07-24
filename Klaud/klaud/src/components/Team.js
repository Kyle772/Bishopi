import React, { Component } from 'react'
import SectionTitle from './SectionTitle'


class Team extends Component {
    render() {

        var TeamData = this.props.TeamData;

        return (
            <section className="out-tem-wrap section-padding pt-0">
                <div className="container">

                <SectionTitle Title="Meet the Awesome team"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />  

                    <div className="row">
                        {
                            TeamData.TeamMembers.map(member=> {
                                
                                return(
                                    <div className="col-md-6 col-xl-3 col-sm-12 col-12" key={member.id}>
                                        <div className={`single-team-member text-center ${member.id === 2 ? 'active' : '' }`}>
                                            <div className="member">
                                                <div className="member-img">
                                                    <img src={require (`../assets/img/${member.imgUrl}.jpg`) } alt="Klaud React" />
                                                </div>
                                                <div className="member-info">
                                                    <h4>{member.name}</h4>
                                                    <span>{member.position}</span>
                                                </div>
                                            </div>
                                            <div className="social-profile-links">
                                                {
                                                    member.socialIcon.map(item=> {
                                                        return(
                                                            <a href={item.url} key={item.id}><i className={item.icon} /></a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Team
