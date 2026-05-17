import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    0% {
        transform: translate(-50%, 20px);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, 0);
        opacity: 1;
    }
`;

const Button = styled.button`
    display: none;
    width: 80%;
    padding: 12px;
    background: #006AFF;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 106, 255, 0.3);
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    
    &:hover {
        transform: translateX(-50%) scale(1.05);
        filter: brightness(1.1);
        box-shadow: 0 8px 25px rgba(0, 106, 255, 0.4);
    }
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background: rgba(22, 28, 58, 0.88);
    cursor: pointer;
    border-radius: 40px;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(120, 160, 255, 0.14);
    overflow: hidden;
    padding: 26px 20px 80px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    border: 1px solid rgba(100, 140, 255, 0.18);
    
    &:hover {
        transform: translateY(-10px);
        box-shadow:
          0 20px 50px rgba(0, 0, 0, 0.6),
          0 0 60px rgba(90, 159, 255, 0.12);
    }
    
    &:hover ${Button} {
        display: block;
        animation: ${slideUp} 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.card_light};
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
    margin-top: 6px;
    padding: 4px 0 8px;
    min-height: 36px;
    overflow: visible;
    flex-shrink: 0;
`

const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    color: #7AB4FF;
    background: rgba(0, 106, 255, 0.15);
    padding: 8px 12px;
    min-height: 30px;
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: 20px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(120, 160, 255, 0.2);
    flex-shrink: 0;
    transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;

    &:hover {
        background: rgba(0, 106, 255, 0.22);
        border-color: rgba(120, 160, 255, 0.35);
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
    color: #E8ECFF;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    color: #A8B4D4;
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
    background-color: ${({ theme }) => theme.card_light};
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
    border: 3px solid ${({ theme }) => theme.card};
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        border-color: ${({ theme }) => theme.primary};
    }
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />
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
                    <Avatar key={index} src={member.img} alt={member.name} />
                ))}
            </Members>
            <Button>{project?.category === 'certificate' ? 'View' : 'View Project'}</Button>
        </Card>
    )
}

export default ProjectCards