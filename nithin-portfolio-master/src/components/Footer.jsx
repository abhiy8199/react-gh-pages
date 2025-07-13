import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Abhishek. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
<a
  href="mailto:abhi.ydv1804@gmail.com?subject=Let's Connect&body=Hi Abhishek,%0D%0A%0D%0AI wanted to get in touch with you regarding..."
  className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1"
  style={{ cursor: 'pointer' }}
>
  <FiMail className="text-xl" />
</a>

					<a href="https://x.com/Abhishe78091784" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FaTwitter className='text-xl' />
					</a>
					<a href="https://www.linkedin.com/in/abhishek-kumar-003a26221" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/abhiy8199" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					
				</div>
			</div>
		</div>
	);
}

export default Footer;