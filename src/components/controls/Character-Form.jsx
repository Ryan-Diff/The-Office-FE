import React from 'react';
import PropTypes from 'prop-types';

const CharacterForm = ({ name, position, quote, imageUrl, favoriteDessert, onChange, onSubmit }) => {

    return (
        <div>
            <form onSubmit={onSubmit} className={'postCharacter'}>
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  />
                <label htmlFor='position'>position</label>
                <input
                  id='position'
                  type='text'
                  name='position'
                  value={position}
                  onChange={onChange}
                  />
                <label htmlFor='quote'>Quote</label>
                <input
                  id='quote'
                  type='text'
                  name='quote'
                  value={quote}
                  onChange={onChange}
                  />
                <label htmlFor='imageUrl'>Image Url</label>
                <input
                  id='imageUrl'
                  type='text'
                  name='imageUrl'
                  value={imageUrl}
                  onChange={onChange}
                  />
                <label htmlFor='favoriteDessert'>Favorite Dessert</label>
                <input
                  id='favoriteDessert'
                  type='text'
                  name='favoriteDessert'
                  value={favoriteDessert}
                  onChange={onChange}
                  />  
                <button data-testid='formButton'>Add Character</button>    
            </form>
        </div>
    );
}  

CharacterForm.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    favoriteDessert: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default CharacterForm;

