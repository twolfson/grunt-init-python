from setuptools import setup, find_packages


setup(
    name='test_unlicense',
    version='9.0.0',
    description='Unlicense test project',
    long_description=open('README.rst').read(),
    keywords=[
        'a',
        'b',
        'c'
    ],
    author='Todd Wolfson',
    author_email='todd@twolfson.com',
    url='http://abc',
    download_url='http://abc/archive/master.zip',
    packages=find_packages(),
    license='UNLICENSE',
    install_requires=open('requirements.txt').readlines(),
    # https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: Public Domain',
        'Operating System :: OS Independent',
        'Programming Language :: Python'
    ]
)
