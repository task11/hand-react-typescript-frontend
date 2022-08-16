import { useLogout } from "@/utils/hooks";
import { StyledHeaderNav, StyledHome, StyledLogOut, StyledProfile, StyledSearch } from "./HeaderNav.style";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import { useSetRecoilState } from "recoil";
import { modeState, SERV_MODE } from "@/store/mode";

const HeaderNav = ({ onToggleSearch, visible, render }) => {
  const { logout } = useLogout();
  const setMode = useSetRecoilState(modeState);

  const onLogout = async () => {
    await logout();
  };

  return (
    <StyledHeaderNav>
      <StyledSearch visible={visible} render={render}>
        <BiSearchAlt2 onClick={onToggleSearch} />
      </StyledSearch>
      <StyledHome onClick={() => setMode(SERV_MODE.MAIN)} visible={visible} render={render}>
        <HiOutlineHome />
      </StyledHome>
      <StyledProfile to="/profile" visible={visible} render={render}>
        <FaRegUserCircle />
      </StyledProfile>
      <StyledLogOut visible={visible} render={render}>
        <RiLogoutBoxRLine onClick={() => onLogout()} />
      </StyledLogOut>
    </StyledHeaderNav>
  );
};

export default HeaderNav;