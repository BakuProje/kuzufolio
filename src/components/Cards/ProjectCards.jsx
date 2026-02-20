import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #00FF88, #00CC6A);
    color: #000;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 255, 136, 0.5);
        background: linear-gradient(135deg, #00CC6A, #00FF88);
    }
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.card_light});
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid rgba(0, 212, 255, 0.1);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(0, 212, 255, 0.1);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 255, 136, 0.05));
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    &:hover {
        transform: translateY(-15px) scale(1.02);
        box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(0, 212, 255, 0.3),
            0 0 30px rgba(0, 212, 255, 0.2);
        border-color: rgba(0, 212, 255, 0.3);
        
        &::before {
            opacity: 1;
        }
    }
    
    &:hover ${Button} {
        display: block;
        animation: slideUp 0.3s ease-out;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    object-fit: cover;
    
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 30px rgba(0, 212, 255, 0.3);
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: linear-gradient(135deg, ${({ theme }) => theme.primary + '20'}, ${({ theme }) => theme.primary + '10'});
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.primary + '30'};
    transition: all 0.2s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary + '30'};
        transform: scale(1.05);
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
    border: 3px solid ${({ theme }) => theme.card};
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        border-color: ${({ theme }) => theme.primary};
    }
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} alt={member.name}/>
                ))}
            </Members>
            <Button>View Project</Button>
        </Card>
    )
}

export default ProjectCards