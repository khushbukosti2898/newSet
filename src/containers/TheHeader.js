import React from 'react'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'
import '../scss/TheHeader.scss';

const TheHeader = () => {
    return (
        <CHeaderNav>
            <CNavItem>
                <CNavLink href="#" active>
                    HOME
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    ED PRICELIST
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    CASE PRICELIST
                </CNavLink>
            </CNavItem>
        </CHeaderNav>
    )
}

export default TheHeader;
