import { LabelFilter, InputFilter } from './Filter.styled'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const filterId = nanoid();

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = event => dispatch(setFilterContacts(event.currentTarget.value));
    
    return (
          <LabelFilter htmlFor={filterId}>
                Fined contscts by name
                <InputFilter
                    id={filterId}
                    type="text"
                    value={filter}
                    onChange={onChange}
                />
        </LabelFilter>
    )
}




// const filterId = nanoid();

// const Filter = ({ value, onChange }) => {
    
//     return (
//           <LabelFilter htmlFor={filterId}>
//                 Fined contscts by name
//                 <InputFilter
//                     id={filterId}
//                     type="text"
//                     value={value}
//                     onChange={onChange}
//                 />
//         </LabelFilter>
// )
// }
// export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }