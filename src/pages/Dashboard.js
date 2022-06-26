import React from 'react';
import TicketCard from "../components/TicketCard";

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color:'red',
            title:'NFT Safety 101',
            owner:'Prajul Sahu',
            avatar:'https://media-exp2.licdn.com/dms/image/C5603AQFmxlxH5Un1Xw/profile-displayphoto-shrink_200_200/0/1624988949357?e=1661990400&v=beta&t=T28Th010Cm644u6UQI9ZSQxGT-uu1_yU_9PhbeBmqyg',
            status:'done',
            priority: 5,
            progress: 100,
            description:'Learn how to work with NFTs safely, how to know one is not genuine',
            timestamp: '2022-06-26T19:40:32+0000'
        },
        {
            category: 'Q1 2022',
            color:'red',
            title:'Sell AI Models',
            owner:'Prajul Sahu',
            avatar:'https://media-exp2.licdn.com/dms/image/C5603AQFmxlxH5Un1Xw/profile-displayphoto-shrink_200_200/0/1624988949357?e=1661990400&v=beta&t=T28Th010Cm644u6UQI9ZSQxGT-uu1_yU_9PhbeBmqyg',
            status:'pending',
            priority: 2,
            progress: 30,
            description:'Learn more about AI',
            timestamp: '2022-06-30T19:40:32+0000'
        },
        {
            category: 'Q2 2022',
            color:'blue',
            title:'MERN Stack App',
            owner:'Prajul Sahu',
            avatar:'https://media-exp2.licdn.com/dms/image/C5603AQFmxlxH5Un1Xw/profile-displayphoto-shrink_200_200/0/1624988949357?e=1661990400&v=beta&t=T28Th010Cm644u6UQI9ZSQxGT-uu1_yU_9PhbeBmqyg',
            status:'in progress',
            priority: 3,
            progress: 70,
            description:'Code an app in MERN stack',
            timestamp: '2022-06-10T19:40:32+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
        // getting categories from the array of objects above, using Set to get unique values
    ]
    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) =>(
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket=> ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) =>(
                                <TicketCard
                                id={_index}
                                color={filteredTicket.color}
                                ticket={filteredTicket}
                                />
                            ))

                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;