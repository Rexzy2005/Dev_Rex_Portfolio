export default function Spinner() {
  return (
    <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <circle cx="40" cy="30" r="20">
    <animate 
      attributeName="r" 
      values="20;30;20" 
      dur="1s" 
      repeatCount="indefinite" 
      begin="0s" 
    />
  </circle>
  <circle cx="100" cy="30" r="20">
    <animate 
      attributeName="r" 
      values="20;30;20" 
      dur="1s" 
      repeatCount="indefinite" 
      begin="0.3s" 
    />
  </circle>
  <circle cx="160" cy="30" r="20">
    <animate 
      attributeName="r" 
      values="20;30;20" 
      dur="1s" 
      repeatCount="indefinite" 
      begin="0.6s" 
    />
  </circle>
</svg>


  );
}
