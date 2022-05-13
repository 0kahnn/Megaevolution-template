import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const ProfilePage = () => (
    <div>
    <GlobalStyles />
    <section className='container'>
        <div className="row">
        <div className='spacer-double'></div>
        <div className="col-md-8 offset-md-2">
        <h3>Don't have an account? Register now.</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        </div>
  </section>
</div>

);
export default ProfilePage;