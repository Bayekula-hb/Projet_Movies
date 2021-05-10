import styled from "styled-components";

const Section = ({ titleSection, menu, menu2, cardMovie }) => {
  const SectionStyled = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.8rem;
    background-color:#8395a7;
    align-items: center;
  `;
  const BlockLeft = styled.div`
    width: 30%;
    color:#ee5253;
    font-size:4rem;
    text-align:center;
  `;
  const BlockRight = styled.div`
    width: 68%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const MenuBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between   ;
  `;
  const MenuBlockSous = styled(MenuBlock)`
    width:30%;
    justify-content: space-between;
  `;
  const ContainterCard = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  return (
    <SectionStyled>
      <BlockLeft>{titleSection}</BlockLeft>
      <BlockRight>
        <MenuBlock>
          <MenuBlockSous>{menu}</MenuBlockSous>
          {menu2}
        </MenuBlock>
        <ContainterCard>{cardMovie}</ContainterCard>
      </BlockRight>
    </SectionStyled>
  );
};
export default Section;
