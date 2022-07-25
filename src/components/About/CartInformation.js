const CartInformation = ({icon,title,desc}) => {
   return ( 
      <div className="rounded-[2rem] xl:w-[240px]  justify-between items-start flex flex-col gap-5 bg-blue-900 p-8 shadow-sm shadow-black">
         <p className="text-blue-400 text-3xl mb-2">{icon}</p>
         <p className="text-2xl mb-0 text-white font-bold">{title}</p>
         <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    );
}
 
export default CartInformation;