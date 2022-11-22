import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { AlertInfo, team } from '../src/util';

const Home: NextPage = () => {

	return (
		<>
			{useMetaData('Home', 'Luyx Home Page', '/')}
			<Layout>
				<div className="absolute bottom-0 w-screen rounded-xl overflow-auto p-8 bg-">
					<div className="flex justify-center">
						<a href="#content" className="animate-bounce bg-gray-900 p-2 w-10 h-10 ring-1 ring-gray-200/30 shadow-lg shadow-white/10 rounded-full flex items-center justify-center">
							<svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
								<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
							</svg>
						</a>
					</div>
				</div>

				<audio src="/audio/start.ogg" hidden={true} autoPlay={false} id="startAudio" />

				<div className="bg-black h-screen w-screen grid items-center">
					<div>
						<img alt="Luyx Development Logo" src={'/assets/images/logo.svg'} className="mx-auto h-64 lg:block hidden" />
						<img alt="Luyx Development Small" src={'/assets/images/cube.svg'} className="mx-auto h-64 block lg:hidden" />

						{
							AlertInfo.show && <div className="max-w-4xl mx-auto lg:mt-0 mt-8">
								<div
									className={'rounded-xl border-2 border-transparent relative mx-4' + (AlertInfo.url && ' cursor-pointer')}
									onClick={(): void => {
										if (AlertInfo.url) window.location.href = AlertInfo.url;
									}}
								>
									<div className={'absolute w-full h-full rounded-xl border-2 border-gray-500 border-dashed transition-all ' + (AlertInfo.url ? 'hover:animate-stop animate-pulse-fast' : 'animate-pulse-fast')}></div>
									<div className="p-3 text-center">
										<span className="p-1 text-sm bg-green-600 rounded-lg mr-3 uppercase">
											{AlertInfo.smallText}
										</span>
										<span className="text-base">
											{AlertInfo.text}
										</span>
									</div>
								</div>
							</div>
						}
					</div>
				</div>

				<div id="content" className="bg-gradient-to-b from-black to-gray-900 p-8">
					{/* <h1 className="text-center text-3xl title">Our projects</h1>
					<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
						These are the projects that we're currently working on.
					</h2>
					<div className="max-w-4xl mx-auto mt-8 grid lg:grid-cols-2 gap-8">
						<a
							href="https://count.bot"
							className="p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-orange-500 hover:shadow-lg hover:shadow-orange-500/40 bg-black"
						>
							<img alt="CountBot logo" src={'/assets/images/countbot.svg'} className="h-16 mx-auto" />
						</a>
						<a
							href="https://treefarmer.xyz"
							style={{ background: '#236f21' }}
							className="p-8 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-green-500 hover:shadow-lg hover:shadow-green-500/40 bg-black"
						>
							<img alt="Tree farmer logo" src={'/assets/images/tree-farmer.svg'} className="h-16 mx-auto" />
						</a>
					</div> */}

					<h1 className="text-center text-3xl title mt-8">Our team</h1>
					<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
						These are the people who make Luyx Development possible.
					</h2>
					<div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 mt-8">
						{
							team.map((t, i) => {
								return (
									<div className="p-4 bg-gray-900 shadow-lg ring-1 ring-gray-200/30 rounded-md flex" key={i}>
										<img alt={t.name} src={t.image} className="rounded-md w-24 mr-4 bg-gray-800" />
										<div className="w-full">
											<p className="text-xl text-ellipsis title">{t.name}</p>
											<p className="text-sm text-ellipsis">{t.role}</p>
										</div>
									</div>
								);
							})
						}
					</div>

					<h1 className="text-center text-3xl title mt-8">Our sponsor host</h1>
					<h2 className="max-w-4xl text-xl mt-2 mx-auto text-center">
						We use Something.Host to host all our projects.
					</h2>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-center mt-2 mx-auto">
							Something.Host provides you blazing fast hosting, with an easy to use platform to manage all your services.
						</h2>
						<div className="grid mt-8">
							<a
								href="https://something.host/en?fpr=fyrlex"
								style={{ background: '#6a54dd' }}
								className="flex p-4 cursor-pointer rounded-md shadow-lg transition-all hover:-translate-y-2 duration-300 ring-1 ring-gray-200/30 hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40 bg-black"
							>
								<div className="mx-auto flex">
									<img alt="Something.host logo" src={'/assets/images/somethinghost.svg'} className="h-8 my-auto" />
									<p className="ml-4 my-auto">Check out Something.Host</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</>);
};

export default Home;