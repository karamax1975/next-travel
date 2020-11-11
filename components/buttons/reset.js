import actions from "redux-form/lib/actions";

export default function Reset({action}) {

  return <button className='btn-reset noText' onClick={action}>
    <svg viewBox="0 0 10 10" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.98789 0.567054C1.59776 0.176131 0.9646 0.175483 0.573676 0.565608C0.182753 0.955733 0.182106 1.5889 0.572231 1.97982L3.58723 5.00099L0.574436 8.01995C0.184311 8.41087 0.184958 9.04404 0.575882 9.43416C0.966805 9.82429 1.59997 9.82364 1.99009 9.43272L5 6.41665L8.00991 9.43272C8.40003 9.82364 9.0332 9.82429 9.42412 9.43416C9.81504 9.04404 9.81569 8.41087 9.42556 8.01995L6.41277 5.00099L9.42777 1.97982C9.81789 1.5889 9.81725 0.955733 9.42632 0.565608C9.0354 0.175483 8.40224 0.176131 8.01211 0.567054L5 3.58533L1.98789 0.567054Z" />
    </svg>
  </button>
}