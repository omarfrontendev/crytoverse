import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body}
  }
  nav,
  .layout_container aside,
  .layout_container aside .sidebar {
    background-color: ${({ theme }) => theme.menuBGK}
  }
  aside ul a.active {
    background-color: ${({ theme }) => theme.activeLinkBGK};
    color: ${({ theme }) => theme.activeLinkColor};
  }
  button.toggle_theme {
    background-color: ${({ theme }) => theme.toggleBtnBGK};
  }
  button.toggle_theme span {
    color: ${({ theme }) => theme.activeLinkColor};
  }
  button.toggle_theme.dark span.dark, 
  button.toggle_theme.light span.light {
    color: ${({ theme }) => theme.activeLinkColor};
  }
  button.toggle_theme .bullet {
    background-color: ${({ theme }) => theme.bulletBGK};
  }
  .stats_container .box_state {
    background-color: ${({ theme }) => theme.stateBoxBGK};
  }
  .title {
    color: ${({ theme }) => theme.titleColor} 
  }
  .stats_container .box_state .title {
    color: ${({ theme }) => theme.stateTitleColor} 
  }
  .coin_desc h3,
  .coin_details_title h2.coin_title,
  h3.amount {
    color: ${({ theme }) => theme.h3Amount} 
  }
  .coin_links ul li:hover, 
  .statistics ul li:hover,
  .card {
    background-color: ${({ theme }) => theme.cardBGK};
  }
  .coin_links span, 
  .statistics .coin_state_title,
  .statistics h3,
  .card.news .header_card h4,
  .card .header .name {
    color: ${({ theme }) => theme.cardHeaderColor} 
  }
  .card.news .card_footer,
  .card.news .header_card + p,
  .card .details {
    color: ${({ theme }) => theme.cardDetailsColor} 
  }
  .card:hover {
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
  .spinner {
    border-color: ${({ theme }) => theme.spinningColor};
    border-right-color: transparent;
  }
  .table_header,
  .table_row_head {
    background-color: ${({ theme }) => theme.tabelHeadBGK};
    color: ${({ theme }) => theme.tabelHeadColor} 
  }
  .coin_desc p,
  .table_row_des {
    color: ${({ theme }) => theme.tabelpColor} 
  }
  .table_header {
    background-color: transparent;
  }
  .coin_links h2,
  .statistics .coin_state_value {
    color: ${({ theme }) => theme.tabelHeadColor} 
  }
  .coin_links h2,
  .coin_links ul li, 
  .statistics ul li {
    border-bottom: ${({ theme }) => theme.borderBColor} 
  }
`;

export  const lightTheme = {
  body: '#bababa21',
  menuBGK : 'var(--dark-color)',
  activeLinkBGK: 'var(--blue-light-color)',
  activeLinkColor: 'var(--dark-color)',
  toggleBtnBGK: 'var(--blue-light-color)',
  bulletBGK: '#168693',
  stateBoxBGK: '#1894a347',
  titleColor: '#444',
  stateTitleColor: '#0006269c',
  h3Amount: 'var(--dark-color)',
  cardBGK: '#fff',
  cardHeaderColor: '#555',
  cardDetailsColor: '#777',
  spinningColor: 'var(--dark-color)',
  tabelHeadBGK: '#fff',
  tabelHeadColor: 'var(--dark-color)',
  tabelpColor: 'var(--trxt-light-color)',
  borderBColor: '1px solid #dddddd8c',
  cardShadow: '0px 3px 16px 8px rgba(190, 190, 190, 0.212)'
};

export const darkTheme = {
  body: '#232222',
  menuBGK: '#424242',
  activeLinkBGK: '#212121',
  activeLinkColor: '#fff',
  toggleBtnBGK: '#232222',
  bulletBGK: '#9e9e9e',
  stateBoxBGK: '#444',
  titleColor: '#fff',
  stateTitleColor: '#ddd',
  h3Amount: '#fff',
  cardBGK: 'rgb(46 45 45)',
  cardHeaderColor: '#ddd',
  cardDetailsColor: '#fff',
  spinningColor: '#9e9e9e',
  tabelHeadBGK: '#444',
  tabelHeadColor: '#ddd',
  tabelpColor: '#9e9e9e',
  borderBColor: '1px solid #424242',
  cardShadow: ''
}

