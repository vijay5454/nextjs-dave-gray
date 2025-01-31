export default function Home() {
  return (
    <div className="bg-home-img h-[100vh] bg-cover bg-center relative">
      <div className="bg-black/50 absolute inset-0 flex justify-center items-center">
        <div>
          <h2 className="font-bold text-xl">Vijay&apos;s Repair Shop</h2>
          <address>31/22, Rajakilpakkam, Tambaram, Chennai - 600073</address>
          <h3 className="font-semibold">Contact Information</h3>
          <p>
            Email:
            <a href="mailto:vijayk90033@gmail.com">vijayk90033@gmail.com</a>
          </p>
          <p>
            Phone Number:
            <a href="tel:+919003324408">9003324408</a>
          </p>
        </div>
      </div>
    </div>
  );
}
