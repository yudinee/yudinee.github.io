import styled from "styled-components"

export const StyleCompany = styled.h3`
font-weight: normal;
`;

export const StyleProject = styled.section`
    margin-bottom: 100px;
`;

export const StyleProjectTitle = styled.div`
    font-weight: normal;
`;

export const StyleSubTitle = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const StyleTextLeft = styled.div`
    text-align: left;
`;

export const StyleContents = styled.ul``;

export const StyleLookBack = styled.div`
    margin-top: -15px;
    margin-bottom: 20px;
    white-space: pre-line;
`;

export const StyleContent = styled.li`
    padding-bottom: 10px;
`;

export const StyleContentsTitle = styled.h4`
    font-weight: normal;
`;

export const StyleContentsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;


export const StyleContentsLeft = styled.div`
    width: 100%;
`;

export const StyleContentsRight = styled.div`
    width: 100%;
`;

export const StyleImages = styled.div`
    display: flex;
    margin-top: 12px;
`;

export const StyleImage = styled.img`
    width: 400px;
    margin: 2px;
    border-radius: 5px;
`;

export const StyleCompanyIcon = styled.img`
    width: 20px;
    margin-top: 10px;
    margin-right: 3px;

    @media screen and (max-width: 425px) {
        width: 15px;
    }
`;

export const StyleProjectImage = styled.img`
    width: 800px;
    margin: 2px;
    border-radius: 5px;

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;