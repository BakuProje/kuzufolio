import styled from 'styled-components';

export const Container = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 100px 0;
    min-height: 100vh;
    scroll-margin-top: 100px;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
`;

export const Title = styled.div`
    font-size: 64px;
    text-align: center;
    font-weight: 800;
    color: #006AFF;
    letter-spacing: -2px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 40px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #A8B4D4;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    background: rgba(22, 28, 58, 0.85);
    border-radius: 100px;
    padding: 6px;
    margin: 16px 0;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(120, 160, 255, 0.22);
    box-shadow:
      0 8px 28px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    position: relative;
    z-index: 1;
    
    @media (max-width: 768px) {
        max-width: 95%;
    }
`;

export const ToggleButton = styled.div`
    flex: 1;
    padding: 12px 0;
    border-radius: 100px;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    transition: all 0.3s ease;
    color: ${({ active }) => (active ? '#FFFFFF' : '#9BA8D4')};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    z-index: 2;

    &:hover {
        color: ${({ active }) => (active ? '#FFFFFF' : '#006AFF')};
    }

    @media (max-width: 768px) {
        font-size: 14px;
        height: 40px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: rgba(255, 255, 255, 0.1);
    margin: 8px 0;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ShowMoreButton = styled.div`
    margin-top: 32px;
    align-self: flex-start;
    cursor: pointer;
    background: rgba(22, 28, 58, 0.85);
    color: #7AB4FF;
    border: 1px solid rgba(120, 160, 255, 0.28);
    font-size: 16px;
    font-weight: 700;
    padding: 12px 32px;
    border-radius: 50px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(0, 106, 255, 0.25);
        background: rgba(32, 40, 78, 0.95);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.35);
    }
`;
