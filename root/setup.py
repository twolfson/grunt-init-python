from setuptools import setup, find_packages


setup(
    name='{%= package_name %}',
    version='{%= version %}',
    description='{%= description %}',
    long_description=open('README.rst').read(),
    keywords=[
    ],
    author='Todd Wolfson',
    author_email='todd@twolfson.com',
    url='{%= url %}',
    bugtrack_url='{%= issue_url %}',
    download_url='{%= download_url %}',
    packages=find_packages(),
    license='{%= licenses %}',
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
