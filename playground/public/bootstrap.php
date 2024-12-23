<?php

$base = dirname(__DIR__);

require dirname($base) . '/vendor/autoload.php';

$kirby = new \Kirby\Cms\App([
  'roots' => [
    'index'    => __DIR__,
    'base'     => $base,
    'site'     => $base . '/site',
    'storage'  => $storage = $base . '/storage',
    'content'  => $storage . '/content',
    'accounts' => $storage . '/accounts',
    'cache'    => $storage . '/cache',
    'logs'     => $storage . '/logs',
    'sessions' => $storage . '/sessions'
  ]
]);
