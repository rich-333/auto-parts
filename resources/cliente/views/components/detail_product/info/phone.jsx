export function Phone() {
  return (
    <div className=" flex gap-4 items-center my-6">
      <div className=" bg-green-600 p-2 rounded-full">
        <img src="images\icons\details_product\info\telephone.svg" alt="" />
      </div>

      <p>Llame para asistencia inmediata al <a className=" hover:underline" href=""><strong>+591 77912729</strong></a></p>
    </div>
  )
}