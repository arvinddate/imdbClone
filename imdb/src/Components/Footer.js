const Footer = () => {
  const currentYear= new Date().getFullYear();
  return (
    <footer>
            <div className='footer-text'>
                <p>imdb &copy; {currentYear} </p>
            </div>

    </footer>

  );
}

export default Footer