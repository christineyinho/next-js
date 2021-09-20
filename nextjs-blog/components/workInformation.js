import styles from './workInformation.module.css';

export const WorkInformation = () => (
    <section id="work">
        <h2>Experience</h2>

        <h4>Recent Technologies:</h4>
        <ul className={styles.technologiesListContainer}>
            <li className={styles.technologiesList}>JavaScript (ES6+)</li>
            <li className={styles.technologiesList}>React</li>
            <li className={styles.technologiesList}>Redux</li>
            <li className={styles.technologiesList}>GraphQL/Apollo</li>
            <li className={styles.technologiesList}>Tailwind</li>
        </ul>
        
        <ul className={styles.listContainer}>
            <li className={styles.listItem}>
                <p><span className={styles.subHeader}>01.</span>
                    <span className={styles.listHeader}>
                        {" "}
                        <a href="https://chuffed.org">Chuffed.org</a>
                    </span>
                </p>
                <p>
                    - Sole front end engineer for 2 years.
                    <br />
                    - Maintance and implemenation of new features for main Chuffed.org site.
                    <br/>
                    - Including payment options (Stripe), integrations with third party platforms (e.g Action Network).
                    <br/>
                    - Refactoring existing code to be modern, performant and maintainable and testable.
                    <br/>
                    - Work with a variety of different languages and frameworks, JavaScript, React, PHP/Laravel, MySQL, GraphQL/Apollo. Testing with Jest/React Testing Library/Cypress.
                    <br/>
                    - Working alongside and communicating with back end engineers, designers, and product managers.
                    <br/>
                    - Ensuring optimisations cross browers.
                    <br/>
                </p>
            </li>
            <li className={styles.listItem}>
                <p><span className={styles.subHeader}>02.</span>
                    <span className={styles.listHeader}>
                        {" "}
                        <a href="https://www.coatesgroup.com/projects/woolworths-australia/">Coates Group</a>
                    </span>
                </p>
                <p>
                    - Building demo production of client POS systems and animated visual content for in house CMS to win new clients.
                    <br />
                    - Building of features and tools for client and internal projects
                    <br />
                    - Working alongside and communicating with other front end engineers, designers, and product owners.
                </p>
            </li>
            <li className={styles.listItem}>
                <p><span className={styles.subHeader}>03.</span>
                    <span className={styles.listHeader}>
                        {" "}
                        <a href="https://www.redballoon.com.au/">Red Balloon</a>
                    </span>
                </p>
                <p>
                    - Rebuild of legacy codebase to React/Redux.
                    <br />
                    - Working alongside and communicating with other front end engineers, designers, and business analysts.
                    <br />
                    - Work with a variety of different languages and frameworks, JavaScript, React, Jenkins, Jest.
                </p>
            </li>
            <li className={styles.listItem}>
                <p><span className={styles.subHeader}>04.</span>
                    {" "}
                    <span className={styles.listHeader}>
                        <a href="https://www.travelinsurancedirect.com.au/">World Nomads Group / Travel Insurance Direct</a>
                    </span>
                </p>
                <p>
                    - Building of marketing landing pages using BEM/SMCSS methodologies.
                    Building of marketing email content for various brands within World Nomads Group, ensuring quality across different email clients.
                    <br />
                    - Working alongside and communicating with front end engineers, marketing executives, product owners and designers.
                </p>
            </li>
            <li className={styles.listItem}>
                <p><span className={styles.subHeader}>05.</span>
                    <span className={styles.listHeader}>
                        <a href="https://www.mcsaatchi.com.au/">M&C Saatchi</a>
                    </span>
                </p>
                <p>
                    - Building of marketing landing pages
                    <br />
                    - Building of animated HTML5 Banners
                </p>
            </li>
        </ul>
    </section>
)