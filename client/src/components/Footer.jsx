import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
  <Footer container className='border border-t-8 border-blue-800'>
    <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-blue-400 via-blue-800 to-indigo-800 rounded-lg text-white'>UChill</span>
                Blog
            </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='https://drive.google.com/file/d/1g6tv79ZgQR_2hq36tg4-S2ONdwqnSxZY/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            Unity Mobile Game
                        </Footer.Link>
                        <Footer.Link 
                        href='https://drive.google.com/file/d/1wXtBFct8p2eKJJd9_1R2uJSS-VwUl_TQ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            Unity Turn Based Strategy Game
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Follow us' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                        href='https://github.com/Skeletus' target='_blank' rel='noopener noreferrer'>
                            Github
                        </Footer.Link>
                        <Footer.Link 
                        href='https://skeletus.github.io/' target='_blank' rel='noopener noreferrer'>
                            Owner Page
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#'>
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Takumi1689" year={new Date().getFullYear()} />
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='https://github.com/Skeletus' icon={BsGithub} />
            </div>
        </div>
    </div>
  </Footer>
    );
}
